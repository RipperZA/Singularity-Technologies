$(function ()
{
  jQuery(document).ready(function ($)
  {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type:     'image',
      tLoading: 'Loading image #%curr%...',
      gallery:  {
        enabled:            true,
        navigateByImgClick: true,
        preload:            [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image:    {
        verticalFit: true,

        tError:   '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item)
                  {
                    return item.el.attr('title') +
                      '<small>Singularity Technologies - image preview</small>'
                  },
      },
    })
  }(jQuery))
})
