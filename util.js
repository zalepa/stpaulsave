function getDate(year, month, day) {
  // const pastDate = new Date(2023, 3, 12);
  const pastDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  const differenceInMs = currentDate.getTime() - pastDate.getTime();
  const differenceInDays = differenceInMs / 86400000;
  return Math.floor(differenceInDays);
}

module.exports = { getDate };