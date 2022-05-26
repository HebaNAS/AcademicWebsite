---
title: CapsNets, a step-up from CNNs?
date: 2022-05-15
excerpt: A gentle intro to Capsule Networks, their architecture and potential.
thumbnail: blog-capsule.jpeg
---

<p class="text-theme-text">Convolutional Neural Networks (CNNs) have been the state-of-the-art when it comes to computer vision tasks. They are in constant improvement and novel architectures are always coming up that are more accurate while being more effcient and faster. However, according to Geoffery Hinton, the routing mechanism between convolutional layers in CNNs, the pooling mechanism, is the problem as it causes loss of valuable information by discarding pixels with low activation or averaging the values of pixels within a window of predefined dimensions (Sabour, Frosst, and G. E. Hinton, 2017). Hinton et al. proposed a new architecture and named it “Capsule Network” and a new routing mechanism, Dynamic Routing between Capsules, which will be discussed in this blog post.</p>

<br/>
<hr class="w-1/2 border-t-theme-text"/>
<br/>

<h2 class="text-2xl font-display font-bold">Capsule Network Architecture</h2>

<p class="text-theme-text">Capsule networks consist of two components: an encoder and a decoder. The encoder component is responsible for the network predictions. The first layer in the network is a regular convolutional layer as in any CNN, it takes in images as input and outputs feature maps. In the architecture prposed by (Sabour, Frosst, and G. E. Hinton, 2017), the convolutional layer produces 256 feature maps after convolving a filter of size 9x9 with a stride of 1 across the input which is 28x28 a single-channel image. The output of the first convolutional layer is 256 feature maps of size 20x20 that is followed by a second convolution where the output of 256 6x6 feature maps is reshaped into 32 blocks of size 6x6 and depth of 8, these blocks contain groups of neurons called capsules and are the basic building block for Capsule Networks. The idea behind having these capsules is to learn and represent properties that correspond to a particular entity in an image and learn part-whole relationships as will be described in the following paragraph on how information gets routed from one layer to the next. The output of each capsule is an 8D vector with the encoded properties learnt about an entity, this is comparable to the output of neurons in CNNs which is a single scalar for each neuron. The probability of the existence of an entity in Capsule Networks is represented by the length of the output vector. A squashing function 2.1 is used on each capsule to introduce non-linearity by driving the vector length value closer to 0 for short vectors and closer to 1 for long vectors. Squashing is comparable to non-linear activation functions in CNNs that activate only neu- rons with outputs passing certain threshold. The first layer with capsules is called “Primary Capsules” layer.</p>