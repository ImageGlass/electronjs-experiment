export default class FluentHighlight {

	static applyTo(selector, option = {}) {

		let _option = {
			original_bg: $(selector).css("background-image"),
			light_color: "rgba(255,255,255,0.2)",
			gradient_size: 150,
		}

		// update options
		_option = Object.assign(_option, option)

		$(selector).mousemove(function (e) {
			let x = e.pageX - $(this).offset().left
			let y = e.pageY - $(this).offset().top

			let bg_light = `radial-gradient(circle ${_option.gradient_size}px at ${_option.x}px ${_option.y}px, ${_option.light_color}, rgba(255,255,255,0))`

			$(this).css({ "background-image": bg_light })

		}).mouseleave(function () {
			$(this).css({ "background-image": _option.original_bg })
		})

	}

}






