/**
 * Created by ChangYong on 2016. 10. 9..
 * version 1.0.0
 */
(function(){
    var Stream = function(arr){
        this._arr = arr;
    };

    var fn = Stream.prototype;

    fn.get = function(){
        return this._arr;
    };

    fn.map = function(func){
        var arr = [];
        this._arr.forEach(function(val){
            arr.push(func(val));
        });
        return new Stream(arr);
    };

    fn.filter = function(predicate){
        var arr = [];
        this._arr.forEach(function(val){
            if(predicate(val) === true){
                arr.push(val);
            }
        });
        return new Stream(arr);
    };

    window.Yong = Stream;
})();