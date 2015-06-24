$(function(){
	Ractive.DEBUG = false;
	var ractive = new Ractive({
	    el: 'hccontainer',
	    template: '#tplHcard',
	    data: {}
	});

	$('.hcardBuilder').on('keyup change', '.hcField', function(e) {
		var $this = $(this);
		var field = $this.data('field');
		ractive.set(field, $this.val());
	});

});