export const capitalize = (str : string|string[]):string => {
  if (!Array.isArray(str)) {
    return str.split(' ').map((e) => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
  }
  const ExRSpacesOrComma = /\s|,/;
  return str.toString().split(ExRSpacesOrComma).map((e) => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
};

export const shortDate = (date : Date):string => {
  if (date.getDate()) {
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: '2-digit', year: 'numeric' });
  }
  return null;
};

export const time = (date: Date|Date[], hour12:boolean = true):string => {
  if (!Array.isArray(date)) {
    if (date.getDate()) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12 });
    }
  }
  if (Array.isArray(date)) {
    return date.map((value) => (value.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12 }))).join(' - ');
  }
  return null;
};
