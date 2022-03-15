  $("#tag").text(config.tag)
  $("#name").text(config.name)
  config.links.forEach(l=>{
    $("#links").append(`<a class="link" href="${l.link}" target="_blank">${l.title}</a>`);
  });
  $("#mailto").attr("href","mailto"+config.email)
  $("#userPhoto").attr("src",config.pic)
  $("#userPhoto").attr("alt",`${config.name}'s photo`)
  document.title = `${config.name} (${config.tag})`
  $('meta[property="og:title"]').attr("content",`${config.name}'s Links`)