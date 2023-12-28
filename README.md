# SpammyFilter

This component was created as a result of the personal Machine Learning project for classifying mail texts as spam or ham.

People are nowadays overflown with information so they get easily overwhelmed by this mass. One recurring example is the mass of spam mails which might contain dangerous content. Therefore, the role of spam filters is now irreplacable.

Due to my interest for Machine Learning and Data Science i decided to collect various Machine Learning algorithms to classify email texts and integrate them in a fullstack application interface. This application contains functionality to classify email texts and save the results in a NoSQL database to display a history of the development of the content of the data with the time.

# Technical description
## What does the microservice do?
The spam_filtering_analysis_visualisation microservice is a web-based service for classifying provided mail texts as spam or ham.

### Which technologies are used

<ul>
    <li/> Docker
    <li/> Angular
    <li/> Bootstrap
</ul>

### How to install it
This ms needs a running instance of the spam_filtering_analysis and spam_filter_storage container

To build this container in particular, run this command:

```console
$ docker build -t your_docker_image_name:latest .
```

To execute this contianer, run this command:

```console
$ docker run -p port:port -t your_docker_image_name:latest
```

The other microservices can be built and executed the same way however some times environment variables are needed.

For this one needs to add this flag for building the container with ENV variables:

```console
$ docker build --build-arg ARG=VALUE ....
```

While running the environment variables dependent containers one needs this flag:

```console
$ docker run -e ARG=VALUE ...
```

### Notes for developers
If you are interested in using this service it is important to note, that this micro service only presents the frontend for a plethora of other micro services.
