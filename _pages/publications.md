---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% assign papers = site.publications | sort: "date" | reverse %}
{% assign last_year = "" %}

{% for post in papers %}
  {% assign year = post.date | date: "%Y" %}
  
  {% if year != last_year %}
  <h2>{{ year }}</h2>
  {% assign last_year = year %}
  {% endif %}

  {% include archive-single.html %}
{% endfor %}
