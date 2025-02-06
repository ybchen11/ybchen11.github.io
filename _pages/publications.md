---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% assign papers = site.publications | sort: "date" | reverse %}
{% for post in papers %}
  {% include archive-single.html %}
{% endfor %}
