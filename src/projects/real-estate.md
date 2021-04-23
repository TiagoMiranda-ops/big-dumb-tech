---
title: Flag Real Estate
stack: Bootstrap, MySQL, PHP & Laravel v8
slug: flag-real-estate
date: 2021-02-10T00:00:00+00:00
thumb: ../images/projects/thumbnails/real-estate.png
featuredImg: ../images/projects/featured/real-estate-banner.png
---
***
# Propósito
Primeira parte do projecto de entrega para o módulo de back-end do curso Full Stack Developer, realizado na Flag Professional @ Porto.

# Descrição
Desenvolvimento de um sistema de anúncios de imóveis para empresa imobiliária, com vista a permitir diversas operações sobre os imóveis identificados.

▶ Sistema que suporta três tipos de utilizadores diferentes (clientes, mediadores, administradores);

▶ Mediante autenticação e autorização, cada tipo de utilizador pode empreender diferentes operações (inserir/editar imóveis, gerir propostas de compra, estatísticas de vendas, etc.);

▶ Ligação a API de aplicação externa e complementar para gerir marcações de visitas aos imóveis (incompleta, vd. segunda parte).

# Veredicto

Primeira de duas aplicações independentes - de cariz mais estrutural - que na medida do possível deveriam interligar-se por uma API: a primeira consumiria a API providenciada pela segunda.
 
Esta baseia-se na framework Laravel, escrita em PHP, ancorando-se numa base de dados relacional gerida por sistema MySQL, e administrada pelo PHPmyAdmin.

Segue o paradigma **Model-View-Controller**, e a capacidade de múltiplos CRUD configura-se como a trave-mestra da aplicação, manipulando os dados existentes (ou por existir) - de acordo com a natureza do utilizador corrente - e submetendo-os sempre a uma validação da sua consistência e qualidade.