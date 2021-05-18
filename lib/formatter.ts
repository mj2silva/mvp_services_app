export const capitalize = (str : string|string[]):string => {
  if (!Array.isArray(str)) {
    return str.split(' ').map((e) => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
  }
  const ExRSpacesOrComma = /\s|,/;
  return str.toString().split(ExRSpacesOrComma).map((e) => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
};

export const shortDate = (date : Date):string => {
  if (date.getDate()) {
    return date.toLocaleDateString();
  }
  return '-';
};

export const time12h = (date: Date):string => {
  if (date.getDate()) {
    // return date.toLocaleTimeString().slice(0, date.toLocaleTimeString().lastIndexOf(':'));
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
  return '-';
};

export const time24h = (date: Date):string => {
  if (date.getDate()) {
    // return date.toLocaleTimeString().slice(0, date.toLocaleTimeString().lastIndexOf(':'));
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
  }
  return '-';
};
