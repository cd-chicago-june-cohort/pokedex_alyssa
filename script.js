$(document).ready(function(){
    
    // Create the pokemon catalog of images 
    
    var imgStr;
    for (var i=1; i<=151; i++){
        imgStr ='<img id="' + i + '" src="http://pokeapi.co/media/img/' + i + '.png">';
        $('#catalog').append(imgStr);
        imgStr='';
    }

    // Populate the pokedex when an img is clicked

    var pokeapiURL; 
    var pokedexContent;
    var pokeID;
    $('#catalog').on('click', 'img', function(){
        pokeID = $(this).attr('id');
        pokeapiURL = 'http://pokeapi.co/api/v1/pokemon/' + pokeID;
        pokedexContent = '';
        $.get(pokeapiURL, function(res){
            console.log(res);
            //Add the name to the pokedex
            pokedexContent += '<h1>' + res.name + '</h1>'; 
            //Add the picture to the pokedex
            pokedexContent += '<img src="http://pokeapi.co/media/img/' + pokeID + '.png">'; 
            // Add types to the pokedex
            pokedexContent += '<h3>Types</h3><ul>';
            for (var i=0; i<res.types.length; i++){
                pokedexContent += '<li>' + res.types[i].name + '</li>';
            }
            pokedexContent += '</ul>'; 
            // Add height to the pokedex
            pokedexContent += '<h3>Height</h3><p>' + res.height + '</p>';
            // Add weight to the pokedex
            pokedexContent += '<h3>Weight</h3><p>' + res.weight + '</p>';
            // console.log(pokedexContent);
            $('#pokedex').html(pokedexContent);
        }, 'json');
    
    });


});