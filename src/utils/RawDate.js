export default date => {
    const d = new Date(date);
    const dtf = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
    const [{ value: mo },  , { value: da }, ,  { value: ye }] = dtf.formatToParts(d);
  
    return {
        "year" : ye,
        "month" : mo,
        "day" : da,
    };
    // return date;
  };
  