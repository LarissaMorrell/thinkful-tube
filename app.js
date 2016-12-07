var BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    var settings = {
        url: BASE_URL,
        dataType: 'json',
        data: {
            part: 'snippet',
            key: 'AIzaSyDASej_7dxIbvT5dvPWOa9wDYSLdC-07-A',
            q: searchTerm
        },
        type: 'GET',
        success: callback
    };
    $.ajax(settings);
}



function displayVideoSearchData(data) {
    var resultElement = '';
    if (data.items.length > 0) {
        data.items.forEach(function(item) {
            
            resultElement += '<a  href="https://www.youtube.com/watch?v=' + item.id.videoId +
            '"><img class=".result" src="' + item.snippet.thumbnails.medium.url + '"></a>';
        });
    } else {
        resultElement += '<p>no videos found</p>';
    }

    $('.js-search-results').html(resultElement);
}

function watchSubmit() {
    $('.js-search-form').submit(function(event) {
        event.preventDefault();
        var query = $(this).find('.js-query').val();
        getDataFromApi(query, displayVideoSearchData);
    });
}

$(function() { watchSubmit(); });
