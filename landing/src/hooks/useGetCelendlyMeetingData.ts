import { useCalendlyEventListener } from "react-calendly";
import { useState } from "react";
import { queryKeys } from "../consts/queryKeys";
import { calendlyService } from "../services/calendly";
import { useQuery } from "@tanstack/react-query";

export const useGetCelendlyMeetingData = () => {
  const [celendlyUri, setCelendlyUri] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [joinLink, setJoinLink] = useState("");

  useCalendlyEventListener({
    onDateAndTimeSelected: () => {
      setCelendlyUri("");
      setDateTime("");
      setJoinLink("");
    },
    onEventScheduled: (e) => {
      setCelendlyUri(e.data.payload.event.uri);
    },
  });

  useQuery(
    [queryKeys.getCalendlyEvent],
    () => calendlyService.getGoogleMeetEventUri(celendlyUri),
    {
      enabled: !!celendlyUri,
      onSuccess: (response) => {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(new Date(response.data.resource.start_time));
        setDateTime(formattedDate);
        setJoinLink(response.data.resource.location.join_url);
      },
    }
  );
  return { dateTime, joinLink };
};
