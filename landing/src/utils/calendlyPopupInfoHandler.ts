import { useEffect, useState } from "react";
import { useCalendlyEventListener } from "react-calendly";

import { adminBookService } from "../services/adminBookServiceModal";

export const calendlyPopupInfoHandler = (callback: () => void) => {
  const [scheduled, setScheduled] = useState(false);
  useCalendlyEventListener({
    onEventScheduled: () => {
      setScheduled(true);
    },
  });

  useEffect(() => {
    if (scheduled) {
      callback();
      adminBookService.createCalendlyCallForPipeDriveLead();
      setScheduled(false);
    }
  }, [scheduled]);
};
