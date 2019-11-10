var jsonSearch = { 
			google:["http://www.google.com/search?q=", "#1369EA"],
			youtube:["http://www.youtube.com/results?search_query=", "#CF2200"],
			instagram:["", "#3B5998"],
			reddit:["http://www.reddit.com/search?q=", "#EF4623"],
			tumblr:["https://www.tumblr.com/search/", "#44556B"],
			twitter:["https://twitter.com/search?q=", "#00ABF1"],
			vkontakte:["https://new.vk.com/search?q=", "#4C75A3"],
			wikipedia:["https://en.wikipedia.org/w/index.php?search=", "#282828"],
			yandex:["https://yandex.com.tr/search/?text=", "#E7322B"]
		};
		window.onload = function()
		{
			var selectedImg = $('#selectedImg');
			var search = $('#search');
			var queryInput = $('#queryInput');

			queryInput.focus();

			if(localStorage.getItem('data') && localStorage.getItem('src'))
			{
				selectedImg.attr('src', localStorage.getItem('src'));
				selectedImg.attr('data', localStorage.getItem('data'));
				ChangeColor(localStorage.getItem('data'));
			}

			$('li').click(function()
			{
				var image = $('img', this).attr('src');
				var data = $(this).attr('data');
				selectedImg.attr('src', image);
				selectedImg.attr('data', data);
				ChangeColor(data);
				queryInput.focus();

				localStorage.setItem('src', image);
				localStorage.setItem('data', data);
			});

			search.click(function()
			{
				if(queryInput.val().trim() != "")
				{
					for (var key in jsonSearch)
					{
						if(key == selectedImg.attr('data'))
						{
							window.open(jsonSearch[key][0] + queryInput.val(), '_blank');
						}
					}
				}
			});

			queryInput.keypress(function(e)
			{
				if(e.which == 13)
				{
        			search.click();
   			 	}
			});

			function ChangeColor(data)
			{
				var color = jsonSearch[data][1];
				search.css({backgroundColor: color, borderColor:color});
				$('#select').attr('title',data[0].toUpperCase()+data.substr(1));
			}
		}