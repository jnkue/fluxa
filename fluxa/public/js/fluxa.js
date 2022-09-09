
function get_branch() {
        return new Promise((resolve, reject) => {
            frappe.call({
                method: "frappe.utils.change_log.get_versions",
                callback: function (r) {
                    versions = r.message;
                    app_branch = versions['fluxa']['branch']
                     resolve(app_branch)
                }
            })
        })
      }

async function changebanner_development(){
    const app_branch = await get_branch()
    console.log(app_branch);

    if (app_branch == 'development') 
    {
        // Change text of logo
        var elements = document.getElementsByClassName('navbar-brand navbar-home');
        Array.prototype.forEach.call(elements, function(element) {
        element.innerText = 'Development Enviroment';  
        });
        // Change background
        var elements = document.getElementsByClassName('navbar');
        Array.prototype.forEach.call(elements, function(element) {
        element.style.background = '#17FFC3' });
    }};

changebanner_development();