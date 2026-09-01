setTimeout(() => {
            console.log("First callback");
            setTimeout(() => {
                console.log("Second callback");
                setTimeout(() => {
                    console.log("Third callback");
                }, 1000);
            }, 1000);
        }, 1000);