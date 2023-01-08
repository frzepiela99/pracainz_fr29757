import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Autorzy = {
  __typename?: 'Autorzy';
  _id: Scalars['String'];
  imie: Scalars['String'];
  nazwisko: Scalars['String'];
  stopien_naukowy: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateAutorzyInput = {
  imie: Scalars['String'];
  nazwisko: Scalars['String'];
  stopien_naukowy: Scalars['String'];
};

export type CreatePublikacjaInput = {
  autorImie: Scalars['String'];
  autorNazwisko: Scalars['String'];
  autorStopienNaukowy: Scalars['String'];
  streszczenie: Scalars['String'];
  tytul: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  imie: Scalars['String'];
  nazwisko: Scalars['String'];
  password: Scalars['String'];
};

export type DeletePublikacjaInput = {
  _id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAutorzy: Autorzy;
  createPublikacja: Publikacja;
  createUser: User;
  deletePublikacja: Publikacja;
  updatePublikacjaAutor: Publikacja;
  updatePublikacjaStreszczenie: Publikacja;
  updatePublikacjaTytul: Publikacja;
};


export type MutationCreateAutorzyArgs = {
  createAutorzyData: CreateAutorzyInput;
};


export type MutationCreatePublikacjaArgs = {
  createPublikacjaData: CreatePublikacjaInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};


export type MutationDeletePublikacjaArgs = {
  deletePublikacjaData: DeletePublikacjaInput;
};


export type MutationUpdatePublikacjaAutorArgs = {
  updatePublikacjaAutorData: UpdatePublikacjaAutorInput;
};


export type MutationUpdatePublikacjaStreszczenieArgs = {
  updatePublikacjaStreszczenieData: UpdatePublikacjaStreszczenieInput;
};


export type MutationUpdatePublikacjaTytulArgs = {
  updatePublikacjaTytulData: UpdatePublikacjaTytulInput;
};

export type Publikacja = {
  __typename?: 'Publikacja';
  _id: Scalars['String'];
  autorImie: Scalars['String'];
  autorNazwisko: Scalars['String'];
  autorStopienNaukowy: Scalars['String'];
  plik: Scalars['String'];
  streszczenie: Scalars['String'];
  tytul: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  autorzy: Array<Autorzy>;
  publikacja: Array<Publikacja>;
  publikacjaAll: Array<Publikacja>;
  publikacjaa: Publikacja;
  user: User;
  usersAll: Array<User>;
  zalogowanyUser: User;
};


export type QueryPublikacjaaArgs = {
  _id: Scalars['String'];
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type UpdatePublikacjaAutorInput = {
  _id: Scalars['String'];
  autorImie: Scalars['String'];
  autorNazwisko: Scalars['String'];
  autorStopienNaukowy: Scalars['String'];
};

export type UpdatePublikacjaStreszczenieInput = {
  _id: Scalars['String'];
  streszczenie: Scalars['String'];
};

export type UpdatePublikacjaTytulInput = {
  _id: Scalars['String'];
  tytul: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  imie: Scalars['String'];
  nazwisko: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, imie: string, nazwisko: string, email: string } };

export type PublikacjaAllQueryVariables = Exact<{ [key: string]: never; }>;


export type PublikacjaAllQuery = { __typename?: 'Query', publikacjaAll: Array<{ __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string, autorStopienNaukowy: string, autorImie: string, autorNazwisko: string, plik: string, userId: string }> };

export type CreatePublikacjaMutationVariables = Exact<{
  createPublikacjaData: CreatePublikacjaInput;
}>;


export type CreatePublikacjaMutation = { __typename?: 'Mutation', createPublikacja: { __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string, autorStopienNaukowy: string, autorImie: string, autorNazwisko: string } };

export type PublikacjaQueryVariables = Exact<{ [key: string]: never; }>;


export type PublikacjaQuery = { __typename?: 'Query', publikacja: Array<{ __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string, autorStopienNaukowy: string, autorImie: string, autorNazwisko: string, plik: string, userId: string }> };

export type UpdatePublikacjaAutorMutationVariables = Exact<{
  updatePublikacjaAutorData: UpdatePublikacjaAutorInput;
}>;


export type UpdatePublikacjaAutorMutation = { __typename?: 'Mutation', updatePublikacjaAutor: { __typename?: 'Publikacja', _id: string, autorStopienNaukowy: string, autorImie: string, autorNazwisko: string, userId: string } };

export type PublikacjaaQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type PublikacjaaQuery = { __typename?: 'Query', publikacjaa: { __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string, autorStopienNaukowy: string, autorImie: string, autorNazwisko: string, plik: string, userId: string } };

export type UsersAllQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersAllQuery = { __typename?: 'Query', usersAll: Array<{ __typename?: 'User', _id: string, email: string, imie: string, nazwisko: string }> };

export type DeletePublikacjaMutationVariables = Exact<{
  deletePublikacjaData: DeletePublikacjaInput;
}>;


export type DeletePublikacjaMutation = { __typename?: 'Mutation', deletePublikacja: { __typename?: 'Publikacja', _id: string } };

export type UpdatePublikacjaStreszczenieMutationVariables = Exact<{
  updatePublikacjaStreszczenieData: UpdatePublikacjaStreszczenieInput;
}>;


export type UpdatePublikacjaStreszczenieMutation = { __typename?: 'Mutation', updatePublikacjaStreszczenie: { __typename?: 'Publikacja', _id: string, streszczenie: string, userId: string } };

export type UpdatePublikacjaTytulMutationVariables = Exact<{
  updatePublikacjaTytulData: UpdatePublikacjaTytulInput;
}>;


export type UpdatePublikacjaTytulMutation = { __typename?: 'Mutation', updatePublikacjaTytul: { __typename?: 'Publikacja', _id: string, tytul: string, userId: string } };

export type ZalogowanyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ZalogowanyUserQuery = { __typename?: 'Query', zalogowanyUser: { __typename?: 'User', _id: string, email: string, imie: string, nazwisko: string } };

export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    imie
    nazwisko
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PublikacjaAllDocument = gql`
    query publikacjaAll {
  publikacjaAll {
    _id
    tytul
    streszczenie
    autorStopienNaukowy
    autorImie
    autorNazwisko
    plik
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PublikacjaAllGQL extends Apollo.Query<PublikacjaAllQuery, PublikacjaAllQueryVariables> {
    document = PublikacjaAllDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePublikacjaDocument = gql`
    mutation createPublikacja($createPublikacjaData: CreatePublikacjaInput!) {
  createPublikacja(createPublikacjaData: $createPublikacjaData) {
    _id
    tytul
    streszczenie
    autorStopienNaukowy
    autorImie
    autorNazwisko
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePublikacjaGQL extends Apollo.Mutation<CreatePublikacjaMutation, CreatePublikacjaMutationVariables> {
    document = CreatePublikacjaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PublikacjaDocument = gql`
    query publikacja {
  publikacja {
    _id
    tytul
    streszczenie
    autorStopienNaukowy
    autorImie
    autorNazwisko
    plik
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PublikacjaGQL extends Apollo.Query<PublikacjaQuery, PublikacjaQueryVariables> {
    document = PublikacjaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePublikacjaAutorDocument = gql`
    mutation updatePublikacjaAutor($updatePublikacjaAutorData: UpdatePublikacjaAutorInput!) {
  updatePublikacjaAutor(updatePublikacjaAutorData: $updatePublikacjaAutorData) {
    _id
    autorStopienNaukowy
    autorImie
    autorNazwisko
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePublikacjaAutorGQL extends Apollo.Mutation<UpdatePublikacjaAutorMutation, UpdatePublikacjaAutorMutationVariables> {
    document = UpdatePublikacjaAutorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PublikacjaaDocument = gql`
    query publikacjaa($_id: String!) {
  publikacjaa(_id: $_id) {
    _id
    tytul
    streszczenie
    autorStopienNaukowy
    autorImie
    autorNazwisko
    plik
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PublikacjaaGQL extends Apollo.Query<PublikacjaaQuery, PublikacjaaQueryVariables> {
    document = PublikacjaaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersAllDocument = gql`
    query usersAll {
  usersAll {
    _id
    email
    imie
    nazwisko
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersAllGQL extends Apollo.Query<UsersAllQuery, UsersAllQueryVariables> {
    document = UsersAllDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePublikacjaDocument = gql`
    mutation deletePublikacja($deletePublikacjaData: DeletePublikacjaInput!) {
  deletePublikacja(deletePublikacjaData: $deletePublikacjaData) {
    _id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePublikacjaGQL extends Apollo.Mutation<DeletePublikacjaMutation, DeletePublikacjaMutationVariables> {
    document = DeletePublikacjaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePublikacjaStreszczenieDocument = gql`
    mutation updatePublikacjaStreszczenie($updatePublikacjaStreszczenieData: UpdatePublikacjaStreszczenieInput!) {
  updatePublikacjaStreszczenie(
    updatePublikacjaStreszczenieData: $updatePublikacjaStreszczenieData
  ) {
    _id
    streszczenie
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePublikacjaStreszczenieGQL extends Apollo.Mutation<UpdatePublikacjaStreszczenieMutation, UpdatePublikacjaStreszczenieMutationVariables> {
    document = UpdatePublikacjaStreszczenieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePublikacjaTytulDocument = gql`
    mutation updatePublikacjaTytul($updatePublikacjaTytulData: UpdatePublikacjaTytulInput!) {
  updatePublikacjaTytul(updatePublikacjaTytulData: $updatePublikacjaTytulData) {
    _id
    tytul
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePublikacjaTytulGQL extends Apollo.Mutation<UpdatePublikacjaTytulMutation, UpdatePublikacjaTytulMutationVariables> {
    document = UpdatePublikacjaTytulDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZalogowanyUserDocument = gql`
    query zalogowanyUser {
  zalogowanyUser {
    _id
    email
    imie
    nazwisko
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZalogowanyUserGQL extends Apollo.Query<ZalogowanyUserQuery, ZalogowanyUserQueryVariables> {
    document = ZalogowanyUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }