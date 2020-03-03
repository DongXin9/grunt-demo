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
    var p = 2 * w + 2 * h,
        a = w * h;

    $perimeter.val(p);
    $area.val(a);
  })
  //get value
  //caculate
  //output
})

