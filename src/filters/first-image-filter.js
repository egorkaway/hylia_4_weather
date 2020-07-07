module.exports = function firstImageFilter(value) {
  // get first image from page content
  if (typeof value === "undefined")
    return "";
  
  let image_regexp = /<img.*?src="(.*?)"[^\>]+>/g;
  let images = [...value.matchAll(image_regexp)];

  // return first match
  for (const image of images) {
  	return image[1];
  }

  return "";
};
