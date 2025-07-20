import { DateTime } from "luxon";

export default function getTimeDiference(dateString: string): string {
  const now = DateTime.now();
  const date = DateTime.fromISO(dateString);

  const timeDiff = now.diff(date, ["year", "month", "week" , "day", "hour", "minute", "second"]).toObject();

  const res = Object.entries(timeDiff).find(([_u, a]) => a > 0);
  if (res) {
    const [unit, amount] = res;
    return amount + " " + unit.charAt(0);
  } else {
    console.log("error geting timediff");
    return "";
  }

}
