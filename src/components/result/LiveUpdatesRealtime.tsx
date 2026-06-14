"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import LiveUpdates from "./LiveUpdates";

interface LiveUpdate {
  time: string;
  message: string;
}

interface Props {
  resultId: string;
  initialUpdates: LiveUpdate[];
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LiveUpdatesRealtime({
  resultId,
  initialUpdates,
}: Props) {

    console.log("LiveUpdatesRealtime mounted");
    
  const [updates, setUpdates] =
    useState(initialUpdates);

  useEffect(() => {
    const channel = supabase
      .channel(`live-${resultId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "lottery_results",
        },
        (payload) => {
          const row = payload.new as any;

          if (row.id !== resultId) return;

          setUpdates(
            row.live_updates || []
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [resultId]);

  return (
    <LiveUpdates updates={updates} />
  );
}