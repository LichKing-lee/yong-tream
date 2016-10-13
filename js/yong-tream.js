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

    fn.peek = function(consumer){
        this._arr.forEach(function(val){
            consumer(val);
        });

        return new Stream(this._arr);
    };

    fn.anyMatch = function(arg){
        for(var i = 0; i < this._arr.length; i++){
            if(this._arr[i] === arg){
                return true;
            }
        }

        return false;
    };

    fn.allMatch = function(arg){
        for(var i = 0; i < this._arr.length; i++){
            if(this._arr[i] !== arg){
                return false;
            }
        }

        return true;
    };

    window.Yong = Stream;
})();