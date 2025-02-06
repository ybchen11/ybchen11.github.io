---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% assign papers = site.publications | sort: "date" | reverse %}
{% for post in papers %}
  <h3>[{{ forloop.index }}] <a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  {% include archive-single.html %}
{% endfor %}
