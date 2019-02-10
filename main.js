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
        search: function () {
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
                app.cars = data;
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