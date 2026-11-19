const longDate = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const shortDate = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const dayNumber = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  timeZone: "UTC",
});

const monthShort = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  timeZone: "UTC",
});

export function formatDate(iso: string) {
  return longDate.format(new Date(`${iso}T00:00:00Z`));
}

export function formatDateShort(iso: string) {
  return shortDate.format(new Date(`${iso}T00:00:00Z`)).replace(".", "");
}

export function getDayNumber(iso: string) {
  return dayNumber.format(new Date(`${iso}T00:00:00Z`));
}

export function getMonthShort(iso: string) {
  return monthShort.format(new Date(`${iso}T00:00:00Z`)).replace(".", "").toUpperCase();
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
