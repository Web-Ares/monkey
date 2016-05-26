$(function(){

    $( '.header__menu-btn' ).each( function() {
        MenuOpen($(this));
    });

    $.each( $('.speakers_load' ), function() {
        new Speakers ( $( this ) );
    } );

} );

var MenuOpen = function(obj) {

    //private properties
    var _obj = obj;

    //private methods
    var _addEvents = function() {

            _obj.on( {
                click: function() {
                    var curElem = _obj.parent();

                    console.log( curElem );

                    if (curElem.hasClass( 'active' )) {
                        curElem.removeClass( 'active' );
                    } else {
                        curElem.addClass( 'active' );
                    }
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    } else {
                        event.cancelBubble = true;
                    }
                }
            });
        },
        _init = function() {

            _addEvents();
        };

    //public properties

    //public methods

    _init();
};

var Speakers = function( obj ) {

    //private properties
    var _self = this,
        _obj = obj,
        _btnMore = _obj.find( '.speakers__more' ),
        _btnAction = _btnMore.data( 'action' ),
        _wrapper = _obj.find( '.game__wrap' ),
        _request = new XMLHttpRequest();

    //private methods
    var _addEvents = function() {

            _btnMore.on( {

                click: function() {
                    _ajaxRequest();
                    return false;
                }

            } );

        },
        _addNewsContent = function( msg ){

            var hasItems = msg.has_items;

            $.each( msg.items, function() {

                var newBlock = $( '<a href="' + this.href + '" class="game__item hidden">' +
                '<img class="game__pic" src="' + this.picture +  '" alt="Game">' +
                '<h3  class="game__name">' + this.name + '</h3>' +
                '</a>' );

                _wrapper.append( newBlock );

            } );

            var newItems = _wrapper.find( '.hidden' );

            setTimeout( function() {
                _heightAnimation( hasItems, newItems );
            }, 50 );

        },
        _heightAnimation = function( hasItems, newItems ){

            newItems.each( function( i ){
                _showNewItems( $( this ),i );
            } );

            if ( hasItems == 0 ){
                _removeBtnMore();
            }

        },
        _showNewItems = function( item, index ){

            setTimeout( function() {
                item.removeClass( 'hidden' );
            }, index * 100 );

        },
        _ajaxRequest = function() {

            var newsItem = _obj.find( '.game__item' );
            _request.abort();
            console.log(newsItem.length);
            _request = $.ajax( {
                url: _btnAction,
                data: {
                    loadedCount: newsItem.length
                },
                dataType: 'json',
                timeout: 20000,
                type: 'GET',
                success: function ( msg ) {

                    _addNewsContent( msg );

                },
                error: function ( XMLHttpRequest ) {
                    if( XMLHttpRequest.statusText != 'abort' ) {
                        alert( 'Error!' );
                    }
                }
            });

        },
        _removeBtnMore = function() {

            _btnMore.css( 'opacity', 0 );

            setTimeout( function() {

                _btnMore.css( 'padding', 0 );

                _btnMore.animate( {
                    height: 0
                }, {
                    duration: 500,
                    complete: function() {
                        _btnMore.remove();
                    }
                } );

            }, 300 );

        },
        _init = function() {

            _addEvents();
            _obj[ 0 ].obj = _self;

        };

    _init();
};