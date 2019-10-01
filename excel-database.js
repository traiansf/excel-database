var $j = jQuery.noConflict();

var inputFilter = $j('#input-filter');
inputFilter.on('keyup', function() {

    var
    $this  = $j(this),
        search = $this.val().toLowerCase(),
        //words = search.split(/\s+/),
        data;

    if(search.length > 0){
        $j('.excel_database_row').hide();
        $j('dl[id]').filter(function(){
            // splitting the data-tags attribute to an array of words:
            data = this.id;
            if (!data.startsWith('excel_database_')) return false;
            return $j.makeArray($j('dd', this)).some(function(value) {
                data = value.innerText.toLowerCase(); 
                return data.indexOf(search) > -1;
            });
        }).show();
    } else {
        $j('.excel_database_row').show();
    }

});
