---
layout: page
title: blog
permalink: /blog/
description: Research updates, insights, and thoughts on AI reasoning and computational linguistics
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">
  <div class="header-bar">
    <h1>Research Blog</h1>
    <h2>{{ page.description }}</h2>
  </div>

  <!-- Featured Research Section -->
  <div class="container featured-research" style="margin-bottom: 2rem;">
    <h3 style="margin-bottom: 1rem; color: var(--global-theme-color);">🔬 Featured Research</h3>
    <div class="row">
      <div class="col-md-8 mb-4">
        <div class="card hoverable h-100">
          <div class="card-body">
            <h4 class="card-title">Making Reasoning Matter</h4>
            <p class="card-text">Our latest work on measuring and improving faithfulness of chain-of-thought reasoning in large language models. We introduce causal mediation analysis to understand whether LLMs actually use their generated reasoning steps.</p>
            
            <div class="research-highlights mb-3">
              <h6>Key Contributions:</h6>
              <ul class="list-unstyled">
                <li><i class="fas fa-check-circle text-success"></i> Causal framework for measuring reasoning faithfulness</li>
                <li><i class="fas fa-check-circle text-success"></i> Analysis across 11 different language models</li>
                <li><i class="fas fa-check-circle text-success"></i> Insights on training objectives and reasoning quality</li>
              </ul>
            </div>
            
            <div class="research-meta mb-2">
              <span class="badge badge-primary">arXiv:2402.13950</span>
              <span class="badge badge-secondary">Chain-of-Thought</span>
              <span class="badge badge-secondary">Causal Analysis</span>
            </div>
            
            <div class="mt-3">
              <a href="/reasoningmatter/" class="btn btn-primary btn-sm">
                <i class="fas fa-info-circle"></i> Project Details
              </a>
              <a href="https://arxiv.org/abs/2402.13950" target="_blank" class="btn btn-outline-secondary btn-sm">
                <i class="fas fa-external-link-alt"></i> Read Paper
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card hoverable h-100">
          <div class="card-body">
            <h5 class="card-title">Research Areas</h5>
            <div class="research-areas">
              <div class="mb-3">
                <h6><i class="fas fa-brain"></i> AI Reasoning</h6>
                <p class="small">Chain-of-thought, causal reasoning, knowledge representation</p>
              </div>
              <div class="mb-3">
                <h6><i class="fas fa-language"></i> NLP</h6>
                <p class="small">Large language models, explanation generation, faithfulness</p>
              </div>
              <div class="mb-3">
                <h6><i class="fas fa-cogs"></i> Model Alignment</h6>
                <p class="small">Human feedback, preference optimization, bias mitigation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr style="margin: 2rem 0;">

  <!-- Blog Posts Tags/Categories -->

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}

  <div class="tag-category-list mb-4">
    <p><strong>Browse by topics:</strong></p>
    <ul class="p-0 m-0" style="display: flex; flex-wrap: wrap; list-style: none;">
      {% for tag in site.display_tags %}
        <li style="margin-right: 15px; margin-bottom: 5px;">
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="badge badge-light">
            <i class="fas fa-hashtag fa-sm"></i> {{ tag }}
          </a>
        </li>
      {% endfor %}
      {% for category in site.display_categories %}
        <li style="margin-right: 15px; margin-bottom: 5px;">
          <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="badge badge-info">
            <i class="fas fa-tag fa-sm"></i> {{ category }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endif %}

  <!-- Featured Blog Posts -->

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}

  <div class="container featured-posts mb-4">
    <h4 style="margin-bottom: 1rem;">📌 Featured Posts</h4>
    {% assign is_even = featured_posts.size | modulo: 2 %}
    <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
    {% for post in featured_posts %}
    <div class="col mb-4">
      <a href="{{ post.url | relative_url }}" style="text-decoration: none;">
        <div class="card hoverable h-100">
          <div class="card-body">
            <div class="float-right">
              <i class="fas fa-thumbtack fa-xs text-muted"></i>
            </div>
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            
            {% if post.external_source == blank %}
              {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
            {% else %}
              {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
            {% endif %}
            {% assign year = post.date | date: "%Y" %}

            <p class="post-meta text-muted small">
              <i class="fas fa-clock"></i> {{ read_time }} min read &nbsp; • &nbsp;
              <i class="fas fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
            </p>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
    </div>

  </div>
  <hr>
  {% endif %}

  <!-- All Blog Posts -->
  <h4 style="margin-bottom: 1rem;">📝 Recent Posts</h4>
  <ul class="post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
    {% if post.thumbnail %}
    <div class="row">
      <div class="col-sm-9">
    {% endif %}
        <h4 style="margin-bottom: 0.5rem;">
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <i class="fas fa-external-link-alt fa-sm text-muted"></i>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h4>
      <p>{{ post.description }}</p>
      <p class="post-meta text-muted">
        <i class="fas fa-clock"></i> {{ read_time }} min read &nbsp; • &nbsp;
        <i class="fas fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
        &nbsp; • &nbsp; {{ post.external_source }}
        {% endif %}
      </p>

      <!-- Tags and Categories -->
      {% if tags != "" or categories != "" %}
      <p class="post-tags">
        {% if tags != "" %}
          {% for tag in post.tags %}
          <span class="badge badge-light">
            <i class="fas fa-hashtag fa-sm"></i> {{ tag }}
          </span>
          {% endfor %}
        {% endif %}
        {% if categories != "" %}
          {% for category in post.categories %}
          <span class="badge badge-info">
            <i class="fas fa-tag fa-sm"></i> {{ category }}
          </span>
          {% endfor %}
        {% endif %}
      </p>
      {% endif %}

    {% if post.thumbnail %}
      </div>
      <div class="col-sm-3">
        <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 120px; width: 100%;" alt="Post thumbnail">
      </div>
    </div>
    {% endif %}
    </li>
    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
