export default function generateSocialImage({
  title,
  // author,
  cloudName,
  imagePublicID,
  cloudinaryUrlBase = "https://res.cloudinary.com",
  version = null,
  titleFont = "Futura",
  titleExtraConfig = "",
  // authorExtraConfig = "",
  // authorFont = "Futura",
  imageWidth = 1280,
  imageHeight = 669,
  textAreaWidth = 1280,
  textLeftOffset = 70,
  titleTopOffset = 180,
  // authorTopOffset = 500,
  textColor = "000000",
  titleFontSize = 90,
}: // authorFontSize = 20,
Config): string {
  // configure social media image dimensions, quality, and format
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    "c_fill",
    "q_auto",
    "f_auto",
  ].join(",");

  // configure the title text
  const titleConfig = [
    `w_${textAreaWidth}`,
    "c_fit",
    `co_rgb:${textColor}`,
    "g_north_west",
    `x_${textLeftOffset}`,
    `y_${titleTopOffset}`,
    `l_text:${titleFont}_${titleFontSize}${titleExtraConfig}:${encodeURIComponent(
      title
    )}`,
  ].join(",");

  // configure the authorline text
  // const authorConfig = [
  //   `w_${textAreaWidth}`,
  //   "c_fit",
  //   `co_rgb:${textColor}`,
  //   "g_north_west",
  //   `x_${textLeftOffset}`,
  //   `y_${authorTopOffset}`,
  //   `l_text:${authorFont}_${authorFontSize}${authorExtraConfig}:${encodeURIComponent(
  //     author
  //   )}`,
  // ].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    titleConfig,
    // authorConfig,
    version,
    imagePublicID,
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
}
