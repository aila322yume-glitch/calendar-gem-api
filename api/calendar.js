export default function handler(req, res) {
  const {
    year = 2025,
    month,
    photoUrl = ""
  } = req.query;

  if (!month) {
    return res.status(400).json({
      error: "month is required. Example: ?month=01&photoUrl=https://image.png"
    });
  }

  return res.status(200).json({
    version: "1.0",
    layout: {
      ratio: "9:16",
      photoPosition: "top-center",
      photoHeight: "48%",
      calendarPosition: "bottom",
      calendarHeight: "52%"
    },
    photoFrame: {
      borderColor: "#D4AF37",
      borderWidth: "2px",
      lace: true,
      laceOpacity: 0.18,
      crownIcon: true,
      crownColor: "#D4AF37",
      crownPosition: "top-center"
    },
    calendar: {
      year,
      month,
      weekdayColor: "#D4AF37",
      textColor: "#000000",
      sundayColor: "#FF6B6B",
      saturdayColor: "#6BA8FF",
      fontFamily: "Serif"
    },
    photo: {
      url: photoUrl,
      rounded: false
    }
  });
}
