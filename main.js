var app = new Vue({
    el: '#app',
    data: {
        addCar: false,
        cars: [],
        loading: false,
        searchCar: "",
        searchState: ""
    },
    methods: {
        search: function (carsLike) {
            app.loading = true;
            var searchQuery = {
                car: encodeURIComponent(app.searchCar)
            };
            if (app.searchState) {
                searchQuery.state = app.searchState;
            };
            Sheetsu.read("https://sheetsu.com/apis/v1.0su/a4d7192e71fd", {
                search: searchQuery
            }).then(function (data) {
                console.log(data);

                if (carsLike) {
                    var cars = [];

                    for (var i = 0, n = data.length; i < n; i++) {
                        if (data[i].car.indexOf(carsLike)) {
                            cars.push(data[i]);
                        }
                    }

                    app.cars = cars;
                }
                else {
                    app.cars = data;
                }

                app.loading = false;
            },
                function (err) {
                    console.log(err);
                    app.cars = [];
                    app.loading = false;
                });
        },
        
         
        
    }

})