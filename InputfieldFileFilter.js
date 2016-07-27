
function updateFileFilter(elm) {
	var val = $(elm).val();
	var $ul = $(elm).closest('div.InputfieldFileInit');
	var visCount = 0;
	var allCount = $ul.find('li.InputfieldFileItem').length;
	$ul.find('li.InputfieldFileItem').each(function(idx, li) {
		if(val == '') {
			visCount++;
			$(li).show();
		} else {
			if($(li).find('a.InputfieldFileName').attr('title').toLowerCase().indexOf(val.toLowerCase()) > -1) {
				visCount++;
				$(li).show();
			} else {
				$(li).hide();
			}
		}
	});
	var $stats = $(elm).siblings('span.filefilterinfo').first();
	$stats.html($stats.data('tpl').replace('{0}', visCount).replace('{1}', allCount));
}
