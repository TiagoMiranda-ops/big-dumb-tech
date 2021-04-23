---
title: Flag Appointments
stack: EJS, node.js + express.js & mongoDB + mongoose
slug: flag-appointment-management-system
date: 2021-02-11T00:00:00+00:00
thumb: ../images/projects/thumbnails/appointments.png
featuredImg: ../images/projects/featured/appointments-banner.png
---
***
# Propósito
Segunda parte do projecto de entrega para o módulo de back-end do curso Full Stack Developer, realizado na Flag Professional @ Porto.

# Descrição
Desenvolvimento de um sistema autónomo de marcação de visitas a imóveis listados na primeira aplicação, através de ligação por API.

▶ Espécie de micro-serviço auxiliar que se anexa à aplicação principal da empresa imobiliária;

▶ Concentra atenções no modelo das marcações (os *appointments*), com respectivo CRUD para manipular marcações presentes e futuras;

▶ Desenho opcional de UI - o fulcro era a criação de uma base de dados separada da principal que dispusesse de representação visual na primeira aplicação (vd. primeira parte).

# Veredicto

Segunda de duas aplicações independentes, que na medida do possível deveriam interligar-se por uma API: a primeira consumiria a API providenciada pela segunda.
 
Esta baseia-se em node.js (agilizada pela "mini-framework" Express.js), e serve-se da base de dados não relacional MongoDB, por seu turno aprofundada pela biblioteca de modelação de dados Mongoose.

O elo de ligação entre aplicações é protagonizado por uma **RESTful API**, vinda do node.js e consumida pelo Laravel da aplicação principal, via *endpoints* e pedidos HTTP.

A aplicação está subdesenvolvida em termos gráficos: a API não é traduzida integralmente no *view engine* de EJS; e no UI da aplicação Laravel, não dispomos da execução de todos os pedidos HTTP pertinentes para o modelo de negócio.