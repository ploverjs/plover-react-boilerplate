exports.index = (ctx) => {
  const state = {
    name: 'React'
  };

  ctx.render({ state });
};
