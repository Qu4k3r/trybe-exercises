module.exports = (likeCounter) => (_req, res) => {
  return res.render('userCard', { likeCounter });
};
