$(function(){
  console.log('hello');
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btncal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
  $btncal.click(function(){
    var w = $width.val(),
        h = $height.val();
    
    /*var p = 2 * w + 2 * h,
        a = w * h;
    */
    var rect = rectangle();

    /*$perimeter.val(p);
    $area.val(a);*/
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  })
  //get value
  //caculate
  //output
})

