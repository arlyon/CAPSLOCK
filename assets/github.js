async function populateGithubActivity(userName, list) {
    const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=100`);

    const repos = {};
    const repo_data = {}; // repo -> [count, date]
    for (ghEvent of await response.json()) {
        const next_date = new Date(ghEvent.created_at);
        const [count, date] = repo_data[ghEvent.repo.name] || [1, next_date];
        repo_data[ghEvent.repo.name] = [count+1, date > next_date ? date : next_date];
        repos[ghEvent.repo.name] = ghEvent.repo;
    }

    for (repo_name of Object.keys(repo_data).slice(0, 8)) {
        const node = document.createElement('li');
        node.style.opacity = "0";
        const plural = repo_data[repo_name][0] === 1 ? "event" : "events";
        node.innerHTML = `<a href="https://github.com/${repo_name}">${repo_name}</a> <span>(${repo_data[repo_name][0]} ${plural})</span> <time datetime="${repo_data[repo_name][1]}">${timeago.format(repo_data[repo_name][1])}</time>`;
        list.appendChild(node);
        await sleep(100);
        node.style.opacity = "1";
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

{{ with .Site.Params.cv.data.github }}
    populateGithubActivity("{{ . }}", document.getElementById("latest-activity"));
{{ end }}
