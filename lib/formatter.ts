import Options from '../components/asesorias/Options';

export const capitalize = (str : string|string[]):string => {
  const ExRSpacesOrComma = /\s|,/;
  if (!Array.isArray(str)) {
    if (str) {
      return str.split(' ').map((e) => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
    }
    return null;
  }
  return str.toString().split(ExRSpacesOrComma).map((e) => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
};

export const shortDate = (date : Date):string => {
  if (date.getDate()) {
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: '2-digit', year: 'numeric' });
  }
  return null;
};

export const fullDate = (date : Date):string => {
  if (date.getDate()) {
    return date.toLocaleString(['es-ES'], {
      day: 'numeric', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'long', hour12: true,
    });
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

type phoneCodes = {
  country?: string,
  region?: string
}

export const phoneNumber = (number:string, codes?:phoneCodes):string => {
  if (number) {
    if (codes) {
      if (codes.country && codes.region) {
        return `+${codes.country} (${codes.region}) ${number}`;
      }
      if (codes.country) {
        return `+${codes.country} ${number}`;
      }
      if (codes.region) {
        return `(${codes.region}) ${number}`;
      }
    }
    return number;
  }
  return null;
};
