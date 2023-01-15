class Utils {
  static getMovisAPI = async (selected) => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${selected}?api_key=365ddc441edefd98fd04773b836837f1`
    );
    return res.json();
  };
}

export default Utils;
