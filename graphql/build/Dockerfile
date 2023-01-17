FROM amazonlinux:2

# yumのアップデート＋キャッシュ削除
RUN yum -y update && yum clean all

RUN yum -y groupinstall "Development Tools"
RUN useradd express -md /home/express && \
    echo 'express:express' | chpasswd && \
    echo 'express ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN yum -y install \ 
    sudo \
    kernel-devel \
    kernel-headers \
    libyaml-devel \
    libffi-devel \
    tk-devel \
    zip \
    wget \
    tar \
    zlib \
    zlib-devel \
    bzip2 \
    bzip2-devel \
    readline \
    readline-devel \
    openssl \
    openssl-devel \
    gdbm-devel \
    procps

# nodejs install
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum -y install nodejs

# change user
USER express
ENV GOPATH="/home/express" \
    PATH="$PATH:/home/express/bin" \
    HOME="/home/express"

WORKDIR /home/express/app