async function populateGithubActivity(userName, list) {
    const response = await fetch(`https://api.github.com/users/${userName}/events`);

    const repos = {};
    const repo_data = {}; // repo -> [count, date]
    for (event of await response.json()) {
        const next_date = new Date(event.created_at);
        const [count, date] = repo_data[event.repo.name] || [1, next_date];
        repo_data[event.repo.name] = [count+1, date > next_date ? date : next_date];
        repos[event.repo.name] = event.repo;
    }

    for (repo_name in repo_data) {
        const node = document.createElement('li');
        node.style.opacity = "0";
        const plural = repo_data[repo_name][0] === 1 ? "event" : "events";
        node.innerHTML = `<a href="https://github.com/${repo_name}">${repo_name}</a> (${repo_data[repo_name][0]} ${plural}) <time datetime="${repo_data[repo_name][1]}">${timeago.format(repo_data[repo_name][1])}</time>`;
        list.appendChild(node);
        await sleep(100);
        node.style.opacity = "1";
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatEventName(name) {
    return name.replace(/Event$/g, '').split(/(?=[A-Z])/).join(" ")
}

{{ with .Site.Params.cv.data.github }}
    populateGithubActivity("{{ . }}", document.getElementById("latest-activity"));
{{ end }}
