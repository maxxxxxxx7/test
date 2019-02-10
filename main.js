var app = new Vue({
    el: '#app',
    data: {
        addBlood: false,
        donors: [],
        loading: false,
        donating: false,
        donorName: "",
        donorPhone: "",
        donorCity: "",
        donorAddress: "",
        donorGroup: "",
        searchCarType: "A+",
        searchState: ""
    },
    methods: {
        search: function () {
            app.loading = true;
            var searchQuery = {
                group: encodeURIComponent(app.searchCarType)
            };
            if (app.searchState) {
                searchQuery.city = app.searchState;
            };
            Sheetsu.read("https://sheetsu.com/apis/v1.0su/a4d7192e71fd", {
                search: searchQuery
            }).then(function (data) {
                console.log(data);
                app.donors = data;
                app.loading = false;
            },
                function (err) {
                    console.log(err);
                    app.donors = [];
                    app.loading = false;
                });
        },
        
         
        
    }

})