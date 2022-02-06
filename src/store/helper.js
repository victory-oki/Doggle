export const flattenResult = (result) => {
  return Object.keys(result).reduce((acc, breed) => {
    let breedHasSubBreed = result[breed].length > 0;
    if (breedHasSubBreed) {
      let subBreed = result[breed];
      subBreed.forEach((subBreed) => {
        acc.push(`${breed} ${subBreed}`);
      });
    } else {
      acc.push(breed);
    }
    return acc;
  }, []);
};
export const getBreedQuery = (name) => {
  return name.split(" ").join("/");
};
