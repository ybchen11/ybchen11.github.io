<!DOCTYPE html>
<html lang="en">
<head>
    {% include head.html %}
</head>
<body>
    <header>
        {% include nav.html %}
    </header>

    <main class="container">
        <h1 class="bio-title">{{ site.author.name }} ({{ site.author.name_cn }})</h1>
        <div class="bio-text">
            {{ content }}
        </div>
        <p><strong>Email:</strong> 
            <a class="bio-email" href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
        </p>
    </main>

    <footer>
        {% include footer.html %}
    </footer>
</body>
</html>
