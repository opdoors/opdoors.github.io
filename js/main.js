var options = [
  {selector: "#ttt", offset: 70, callback: function(el)
    {
      $(el).css("opacity", "1.0");
    }
  },
];
Materialize.scrollFire(options);
