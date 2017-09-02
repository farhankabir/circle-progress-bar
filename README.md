## jQuery Custom Circle Progress Bar

[Source](https://github.com/kottenator/jquery-circle-progress)
```javascript
jQuery(document).ready(function($) {
	$('#id').circleProgress({
	    value: 0.95, //It should be from 0.0 to 1.0 || Default: 0
	    size: 150, //Size of the circle / canvas in pixels || Default: 100
	    thickness: 3, //Width of the arc. By default it's automatically calculated as 1/14 of size
	    fill: {gradient: ['#C33764', '#1D2671']},
	    //fill: {gradient: ["red", "orange"]},
	    //fill: '#22babf',
	    //fill: { color: "#ff1e41" } 
	    //fill: { gradient: ["red", "green", "blue"] } 
	    animation: { duration: 1200, easing: "circleProgressEasing" }, //Default
	}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  	});
});
```
`fill` [Gradient generator](https://uigradients.com)

#### html
```
<div class="container">
	<div class="row">
		<div class="col-md-3">
			<div class="single-skillbar">
				<div class="single-skillbar-inner" id="id">
					<span class="skill-count-no"></span>
				</div>
				<h4>Progress Bar Heading</h4>
			</div>
		</div>
	</div>
</div>
```
#### css
```
.single-skillbar {
    text-align: center;
    margin-top: 50px;
}

.single-skillbar-inner{
	position: relative;
}

span.skill-count-no {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    line-height: 50px;
    margin-top: -25px;
}

.single-skillbar h4 {
    margin-top: 25px;
}
```


