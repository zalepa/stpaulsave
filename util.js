function getDate() {
  const pastDate = new Date(2023, 3, 12);
  const currentDate = new Date();
  const differenceInMs = currentDate.getTime() - pastDate.getTime();
  const differenceInDays = differenceInMs / 86400000;
  return Math.floor(differenceInDays);
}

module.exports = { getDate };